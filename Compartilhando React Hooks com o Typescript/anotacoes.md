# Anotações - Compartilhando React Hooks com o Typescript

- Utilize Unknown no lugar de any ao tipar algo

```TS
  const a: unknown = 1
```

- Quando não sabemos o que iremos tipar em uma função ou classe, utilizamos um generic com o tipo de retorno customizado.

```TS
  function newFunc<T>(params: T) {
    return params;
  }
```