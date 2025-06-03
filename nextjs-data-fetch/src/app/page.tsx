import { Metadata } from "next"
import UserItem, { UserType } from "./component/UserItem"

export const metadata:Metadata = {
  title: "User page",
  description:"This is user page."
}

const fetchUsers =  async () => {
  const res = await fetch("http://localhost:3000/api/users")
  const data = await res.json()
  return data.users
}

const page = async () => {
  const users: UserType[] = await fetchUsers()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map( user => (
          <UserItem key={user.id} userItem={user}/>
        ))}
      </ul>
    </div>
  )
}

export default page