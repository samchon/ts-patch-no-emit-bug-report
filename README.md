```bash
npm install
npm start
```

When `noEmit` be configured, `addDiagnostics` function of `ts-patch` does not work.

Here is the demonstration of the problem.

```bash
------------------------------------------
When noEmit is true
------------------------------------------
src/index.ts:3:7 - error TS2322: Type 'number' is not assignable to type 'bigint'.

3 const value: bigint = 3;
        ~~~~~


Found 1 error in src/index.ts:3

------------------------------------------
When noEmit is true
------------------------------------------
src/index.ts:3:7 - error TS2322: Type 'number' is not assignable to type 'bigint'.

3 const value: bigint = 3;
        ~~~~~

src/index.ts:4:1 - error TS(typia.json.typia.json.stringify): unsupported type detected

- bigint
  - JSON does not support bigint type.

4 typia.json.stringify<bigint>(value);
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: src/index.ts:3
```