// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const handleResponse = async (response: Response) => {
  if (response.ok) return await response.json()
  else return await Promise.reject(response.status)
}
