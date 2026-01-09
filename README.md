# Ari Test Harness

A minimal test repository for end-to-end testing of the [Ari](https://github.com/benjaminfrs/Ari) multi-agent orchestrator.

## Purpose

This repository contains simple JavaScript functions with comprehensive tests. Some functions are implemented, others are stubs that throw "Not implemented" errors. Ari workers are given tasks to implement these stub functions, and the test suite validates their work.

## Structure

```
ari-test-harness/
├── src/
│   ├── math.js       # Math utilities (add, subtract implemented; multiply, divide, square, cube as stubs)
│   └── strings.js    # String utilities (concat implemented; reverse, capitalize, isPalindrome as stubs)
├── tests/
│   ├── math.test.js  # Jest tests for all math functions
│   └── strings.test.js # Jest tests for all string functions
├── .beads/           # Beads issue tracking database
├── package.json      # npm configuration with Jest
└── README.md
```

## Running Tests

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
npm install
```

### Run All Tests

```bash
npm test
```

### Run Specific Test Files

```bash
npm run test:math      # Run only math tests
npm run test:strings   # Run only string tests
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

## Expected Test Results

### Initial State (Before Implementation)

With stub functions, tests will fail:

```
FAIL  tests/math.test.js
  ✓ add (implemented)
  ✓ subtract (implemented)
  ✕ multiply (not implemented)
  ✕ divide (not implemented)
  ✕ square (not implemented)
  ✕ cube (not implemented)

FAIL  tests/strings.test.js
  ✓ concat (implemented)
  ✕ reverse (not implemented)
  ✕ capitalize (not implemented)
  ✕ isPalindrome (not implemented)
```

### After Worker Implementation

Once a worker implements a function, its tests should pass:

```
PASS  tests/math.test.js
  ✓ multiply (now implemented)
```

## Test Scenarios for Ari

### Success Scenarios

| Task | Expected Outcome |
|------|------------------|
| Implement `multiply` | Worker implements, tests pass, branch merged |
| Implement `cube` | Worker implements, tests pass, branch merged |
| Implement `reverse` | Worker implements, tests pass, branch merged |

### Failure Scenarios

| Task | Expected Outcome |
|------|------------------|
| Implement `divide` (tricky signature) | Worker may miss `precision` parameter, tests fail |
| "Refactor entire codebase" (timeout) | Worker runs out of time, no result |

### Conflict Scenarios

| Tasks | Expected Outcome |
|-------|------------------|
| Worker A: `multiply`, Worker B: `square` | Both modify math.js, merge conflict on second |

## Beads Integration

This repo uses [Beads](https://github.com/steveyegge/beads) for issue tracking.

```bash
# List available tasks
bd ready

# Show all tasks
bd list

# View task details
bd show th-1
```

## Resetting the Repository

To reset to initial state after testing:

```bash
git checkout main
git reset --hard origin/main
git clean -fd
```

## License

MIT
