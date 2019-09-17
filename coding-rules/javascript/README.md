# Coding rules

## Refs

- Documents
  - https://github.com/airbnb/javascript
  - https://www.w3schools.com/js/js_conventions.asp

* Use eslint
  - https://eslint.org/docs/rules/
  - https://github.com/standard/eslint-config-standard

## Rules

- IDE: VS Code
- Sử dụng indent 4 (4 spaces)
- Use backtick with string
- Use camelCase for identifier names
- Promise bắt buộc sử dụng resolve, reject
- Không được quá 80 ký tự trên một dòng
- Sử dụng **camelCase** để đặt tên cho biến
- Các file thì được đặt theo quy tắc **shop-controller**

# Install ENV

- IDE: VS Code
- Extension: Prettier

* Sử dụng extension Pretier
* https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* Config VS Code
```
  "editor.formatOnSave": false,
  "[javascript]": {
  "editor.formatOnSave": true
  }
```

- Setup file package.json with libs

```
    "devDependencies": {
        "eslint": "^6.3.0",
        "eslint-config-standard": "^14.1.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-node": "^10.0.0",
        "eslint-plugin-promise": "^4.2.1",
        "eslint-plugin-standard": "^4.0.1"
    }
```

- Setup comnand eslint in package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint ."
  },
```

- Run command and fix bug
