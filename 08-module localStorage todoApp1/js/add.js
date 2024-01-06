import { addTodos } from "../module/addTodos.js";
import { qs } from "../module/utility.js";

qs('.add-form').addEventListener('submit',e=>{
  e.preventDefault();
  addTodos()
})