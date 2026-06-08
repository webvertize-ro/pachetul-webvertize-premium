import re

with open("seed.sql", "r") as f:
    lines = f.readlines()

counter = 1
output = []

for line in lines:
    stripped = line.rstrip()
    if stripped.endswith('),') or stripped.endswith(');'):
        new_line = re.sub(r',\s*\d+(\)[,;])$', lambda m: f', {counter}{m.group(1)}', stripped) + '\n'
        output.append(new_line)
        counter += 1
    else:
        output.append(line)

with open("seed.sql", "w") as f:
    f.writelines(output)