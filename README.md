# Example of Submodules

The current module (called `parent`) makes use of a `child` module, which is imported as `src/shared`.

## Installation

1. Clone the project

```bash
git clone https://github.com/spirimy/parent.git
```

2. Navigate to the project directory and initialize all submodules

```bash
cd parent
git submodule init
git submodule update
```

3. Install dependencies using the yarn script

```bash
yarn deps
```
