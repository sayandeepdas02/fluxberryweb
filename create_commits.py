
import subprocess
import os
import math

def run_command(command):
    try:
        subprocess.run(command, shell=True, check=True, cwd="/Users/sayandeep/Desktop/Landing-Fluxberry/website-main")
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}")
        print(e)

# Get list of all changes
status_output = subprocess.check_output("git status --porcelain", shell=True, cwd="/Users/sayandeep/Desktop/Landing-Fluxberry/website-main").decode("utf-8")
lines = status_output.strip().split("\n")

changes = []
for line in lines:
    if line.strip():
        parts = line.split(maxsplit=1)
        if len(parts) == 2:
            changes.append(parts[1])

total_changes = len(changes)
target_commits = 35
files_per_commit = math.ceil(total_changes / target_commits)

print(f"Total changes: {total_changes}")
print(f"Target commits: {target_commits}")
print(f"Files per commit: {files_per_commit}")

current_files = []
commit_count = 0

for i, file_path in enumerate(changes):
    current_files.append(f'"{file_path}"')
    
    if len(current_files) >= files_per_commit or i == len(changes) - 1:
        commit_count += 1
        files_str = " ".join(current_files)
        
        # Determine commit message based on content
        msg = f"chore: cleanup and updates part {commit_count}"
        if "README.md" in files_str:
            msg = "docs: update README with Fluxberry AI details"
        elif "layout.tsx" in files_str:
            msg = "feat: update layout metadata"
        elif "Footer.tsx" in files_str:
            msg = "feat: update footer links and remove theme toggle"
        elif "blog" in files_str:
            msg = f"chore: remove legacy blog content part {commit_count}"
        elif "learn" in files_str:
            msg = f"chore: remove legacy learn content part {commit_count}"
        
        print(f"Committing batch {commit_count} with {len(current_files)} files...")
        run_command(f"git add {files_str}")
        run_command(f'git commit -m "{msg}"')
        current_files = []

print(f"Created {commit_count} commits.")
