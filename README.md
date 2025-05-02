# LeetCode Practice

This repository contains coding solutions to LeetCode problems in both **Python** and **JavaScript**, with tests written using **pytest** and **Jest** respectively.

---

## 🔐 Configuring a Second SSH Key

If you have multiple GitHub accounts (e.g., personal and work), follow the steps below to configure a second SSH key.

### 1. Generate a New SSH Key

You can choose a custom filename, e.g., `id_ed25519_personal`:

👉 [GitHub Docs – Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### 2. Update SSH Config

Edit your SSH config file:

```bash
vim ~/.ssh/config
```

Add a new host entry:

```bash
Host github_personal
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  AddKeysToAgent yes
```

### 3. Configure Git Remote and User Info

Replace the host in the Git SSH URL with your custom host (e.g., `github_personal`):

```bash
# Clone using the new SSH config
git clone git@github_personal:weilianlow/leetcode-practice.git

# Verify remote url
git remote -v
# Output:
# origin  git@github_personal:weilianlow/leetcode-practice.git (fetch)
# origin  git@github_personal:weilianlow/leetcode-practice.git (push)

# Configure Git user info
git config user.name "weilianlow"
git config user.email "weilian.low88@gmail.com"

# Verify settings
git config user.name && git config user.email
# Output:
# weilianlow
# weilian.low88@gmail.com
```

---

## 🧪 How to Run Tests

### 🐍 Python

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest python/
```

### 📜 JavaScript

```bash
npm install
npm test
```

---