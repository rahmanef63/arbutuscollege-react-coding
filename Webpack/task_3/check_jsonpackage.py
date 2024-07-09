import json
import os

def file_contains(filepath, patterns):
    try:
        with open(filepath, 'r') as file:
            content = file.read()
            for pattern in patterns:
                if pattern not in content:
                    print(f"Pattern not found: {pattern}")
                    return False
            return True
    except FileNotFoundError:
        print(f"File not found: {filepath}")
        return False

base_path = '/root/arbutuscollege-react-coding/Webpack/task_3/'
package_json_path = os.path.join(base_path, 'package.json')
webpack_config_path = os.path.join(base_path, 'webpack.config.js')

# Check if the package.json file exists
if not os.path.exists(package_json_path):
    print(f"File not found: {package_json_path}")
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
        print(f"Dependency not found: {dependency}")
        print("False")
        exit(1)

# Check if start-dev script is set correctly
scripts = loaded_package_json.get("scripts", {})
if scripts.get("start-dev") != "webpack-dev-server --open":
    print(f"Script 'start-dev' is not set correctly: {scripts.get('start-dev')}")
    print("False")
    exit(1)

# Check if webpack.config.js contains the required path setting
required_patterns = [
    "mode: 'development'",
    "filename: '[name].bundle.js'",
    "path: path.resolve(__dirname, 'public')",
    "devtool: 'inline-source-map'",
    "contentBase: path.resolve(__dirname, 'public')",
    "port: 8564"
]

if not file_contains(webpack_config_path, required_patterns):
    print("False")
    exit(1)

print("True")
print("True")
print("True")
print("True")

