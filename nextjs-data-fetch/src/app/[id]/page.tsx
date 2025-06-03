import { UserType } from "../component/UserItem"

type Props = {
    params: Promise<{id:string}>
}

const page = async ({params}: Props) => {
    const {id} = await params
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data: UserType = await res.json()

  return (
    <div>
        <h1>User detail</h1>
        <h2>Name: {data.firstName} {data.lastName}</h2>
        <p>email: {data.email}</p>
    </div>
  )
}

export default page