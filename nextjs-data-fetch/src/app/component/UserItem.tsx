"use client"

import Link from "next/link"

export interface UserType {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender:string,
  email:string
}

type Props = {
    userItem: UserType
}

const UserItem = ({userItem}: Props) => {

  return (
    <li>
      <Link href={`/${userItem.id}`}>
        {userItem.firstName}
      </Link>
    </li>
  )
}

export default UserItem