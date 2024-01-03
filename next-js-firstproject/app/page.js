import Users from "@/components/Users";

async function fetUsers() {
  const data = await fetch("https://reqres.in/api/users").then((res) =>
    res.json()
  );
  return data.data;
}
async function HomePage() {
  const users = await fetUsers();
  console.log(users);

  return <Users users={users} />;
}

export default HomePage;
