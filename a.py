import subprocess

# Getting metadata
meta_data = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'])

# Decoding metadata
data = meta_data.decode('utf-8', errors="backslashreplace")

# Splitting data by line
data = data.split('\n')

# Creating a list of profiles
profiles = []

# Traverse the data
for i in data:
    # Find "All User Profile" in each item
    if "All User Profile" in i:
        # Split the item
        i = i.split(":")
        # Item at index 1 will be the Wi-Fi name
        i = i[1].strip()
        # Appending the Wi-Fi name to the list
        profiles.append(i)


# Printing heading
print("{:<30}| {:<}".format("Wi-Fi Name", "Password"))
print("----------------------------------------------")

# Traversing the profiles
for i in profiles:
    try:
        # Getting metadata with password using Wi-Fi name
        results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', i, 'key=clear'])

        # Decoding and splitting data line by line
        results = results.decode('utf-8', errors="backslashreplace")
        results = results.split('\n')

        # Finding password from the result list
        results = [b.split(":")[1][1:-1] for b in results if "Key Content" in b]

        # If there is a password, print the password
        try:
            print("{:<30}| {:<}".format(i, results[0]))
        # If there is no password, print blank
        except IndexError:
            print("{:<30}| {:<}".format(i, ""))

    except subprocess.CalledProcessError:
        print("Encoding Error Occurred")