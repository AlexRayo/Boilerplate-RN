export type ResRegister = Array<{
    id: string;
    time: string;
    client: object;
  }>

export type formParams = {
    client: object,
    register: ResRegister,
    clearForm(): void,
}