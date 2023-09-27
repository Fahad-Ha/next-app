import Link from "next/link";
import React, { Suspense } from "react";
import UserTable from "../components/UserTable";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable />
      </Suspense>
    </>
  );
};

export default UsersPage;
