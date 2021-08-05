import React from "react";
import {Heading, VStack, IconButton, useColorMode} from "@chakra-ui/react"
import  TodoList  from "./components/TodoList";
import  AddTodo  from "./components/AddTodo";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function App() {
  const initialTodos = [
    {
        id: 1,
        body: "get bread"
    },
    {
        id: 2,
        body: "get butter"
    }
  ]
  const {colorMode, toggleColorMode} = useColorMode()
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {return todo.id !== id});
    setTodos(newTodos)
  }
  function addTodo(todo) {
    setTodos([...todos, todo])
  }
  return (
    <VStack p={4}>
      <IconButton 
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
        isRound='true' 
        size='lg' 
        alignSelf="flex-end" 
        onClick={toggleColorMode}
      />
      <Heading 
        mb="8" 
        fontWeight="extrabold" 
        size="2xl" 
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo}/>
    </VStack>
  )
}

