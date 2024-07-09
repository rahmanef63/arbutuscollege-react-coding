import json
import os

def file_contains(filepath, patterns):
    try:
        with open(filepath, 'r') as file:
            content = file.read()
            return all(pattern in content for pattern in patterns)
    except FileNotFoundError:
        return False

package_json_path = 'task_3/package.json'

# Check if the package.json file exists
if not os.path.exists(package_json_path):
    print("False")
    exit(1)

# Load and parse the package.json file
try:
    with open(package_json_path, 'r') as json_file:
        loaded_package_json = json.load(json_file)
except json.JSONDecodeError as e:
    print(f"JSONDecodeError: {e}")
    print("False")
    exit(1)

# Define the required devDependencies
required_dev_dependencies = [
    "webpack-dev-server",
    "html-webpack-plugin",
    "clean-webpack-plugin"
]

# Check for the required devDependencies
dev_dependencies = loaded_package_json.get("devDependencies", {})
for dependency in required_dev_dependencies:
    if dependency not in dev_dependencies:
        print("False")
        exit(1)

# Check if start-dev script is set correctly
scripts = loaded_package_json.get("scripts", {})
if scripts.get("start-dev") != "webpack-dev-server --open":
    print("False")
    exit(1)

# Check if webpack.config.js contains the required path setting
webpack_config_path = 'task_3/webpack.config.js'
if not file_contains(webpack_config_path, patterns=['path.resolve(__dirname, "public")']):
    print("False")
    exit(1)

print("True")
print("True")
print("True")
print("True")

