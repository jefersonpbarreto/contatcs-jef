import Header from "./components/Header"
import Input from "./components/Input"
import { Search, Bookmark, PlusCircle } from "lucide-react"
import Select from "./components/Select"
import Button from "./components/Button"


function App() {

  return (
    <div>
      <Header />
      <Input icon={<Search />} />
      <Select icon={<Bookmark />} />
      <Button icon={<PlusCircle />} />
    </div>
  )
}

export default App
