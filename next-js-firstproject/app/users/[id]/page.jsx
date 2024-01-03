async function getUser(id) {
  const data = await fetch(`https://reqres.in/api/users/${id}`).then((res) =>
    res.json()
  );
  return data.data;
}

async function UserPage({ params }) {
  // console.log(params);
  const user = await getUser(params.id);
  return (
    <div className="bg-slate-400 p-10 rounded-md">
      {/* <h1 className="text-3xl font-bold">User Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <img src={user.avatar} className=" w-20 m-auto my-4" />
      <h3 className="text-3xl font-bold">
        {user.id} :: {user.first_name} {user.last_name}
      </h3>
      <p>email: {user.email}</p>
    </div>
  );
}

export default UserPage;
