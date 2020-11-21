import "./App.css";
import List from "./components/List";
import friends from "./friends";
function App() {
  const formatDate = () => {
    let date = new Date();
    return `${date.getDate()}-${date.getMonth()}`;
  };
  let todayBirth = [];
  let todays = () => {
    let date = new Date();
    let formatDate = `${date.getDate()}-${date.getMonth()}`;
    friends.map((friend) => {
      let dob = friend.dob.split("-");
      let obj = {};
      if (formatDate === `${dob[0]}-${dob[1]}`) {
        obj["id"] = friend.id;
        obj["name"] = friend.name;
        obj["age"] = friend.age;
        obj["dob"] = friend.dob;
        obj["image"] = friend.image;
        return todayBirth.push(obj);
      }
    });
  };
  todays();
  return (
    <main>
      <section className="container">
        <h3>{todayBirth.length} birthdays today</h3>
        <List data={todayBirth} />
      </section>
    </main>
  );
}

export default App;
