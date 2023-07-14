import { useCallback, useState } from "react";
import TodoTask from "./TodoTask";
import Progress from "./Progress";
import { ButtonStyle, FormStyle, InputForm, LiStyle, RemoveButton, ReturnButton, TaskBox, TasksContainer, TitleStyle, UlStyle } from "../style";


const ToDoList = () =>{

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([{id: 1, text: "Task 1", done: false},{id: 2, text: "Task 2", done: false}])
    const [progress, setProgress] = useState([])
    const [completedTasks, setCompletedTasks] = useState([]);

    
      const handleChange = useCallback((event) => {
        const value = event.target.value
        setInputValue(value);    
      }, [])


      const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const task = {
          id: tasks.length + 1,
          text: inputValue,
          done: false,
        };
    
        setTasks((prevState) => [...prevState, task]);
        setInputValue("");
      }, [inputValue, tasks.length]);
    
      const handleToProgress = useCallback((taskId) => {
        setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
        const completedTask = tasks.find((task) => task.id === taskId);
        setProgress((prevState) => [...prevState, completedTask]);
      }, [tasks]);
    
      const handleDone = useCallback((taskId) => {
        setProgress((prevState) => prevState.filter((task) => task.id !== taskId));
        const completedTask = progress.find((task) => task.id === taskId);
        setCompletedTasks((prevState) => [...prevState, completedTask]);
      }, [progress]);
    
      const handleRemove = useCallback((taskId) => {
        setCompletedTasks((prevState) => prevState.filter((task) => task.id !== taskId));
      }, []);
    
      const handleReturnToPending = useCallback((taskId) => {
        const updatedCompletedTasks = completedTasks.filter((task) => task.id !== taskId);
        const taskToReturn = completedTasks.find((task) => task.id === taskId);
    
        setCompletedTasks(updatedCompletedTasks);
        setProgress((prevState) => [...prevState, taskToReturn]);
      }, [completedTasks]);
      

        return(
          <TasksContainer>
            <TaskBox>
              <FormStyle onSubmit={handleSubmit}>
                <TitleStyle>Backlog | {tasks.length}</TitleStyle>
                <InputForm onChange={handleChange} value={inputValue}></InputForm>
                <ButtonStyle type="submit">Add Task</ButtonStyle>
              </FormStyle>

              {tasks.map((task) => (
                <TodoTask
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  done={task.done}
                  handleToProgress={handleToProgress}
                />
              ))}
            </TaskBox>

            <TaskBox>
              <TitleStyle>In Progress: | {progress.length}</TitleStyle>
              {progress.map((progress) => (
                <Progress
                  key={progress.id}
                  id={progress.id}
                  text={progress.text}
                  done={progress.done}
                  handleDone={handleDone}
                />
              ))}
            </TaskBox>

            <TaskBox>
              <TitleStyle>Done | {completedTasks.length}</TitleStyle>
                <UlStyle>
                  {completedTasks.map((task) => (
                    <LiStyle key={task.id}>{task.text}
                      <RemoveButton onClick={() => handleRemove(task.id)} className="remove-button">Remove</RemoveButton>
                      <ReturnButton onClick={() => handleReturnToPending(task.id)} className="return-button">Return</ReturnButton>
                    </LiStyle>
                  ))}
                </UlStyle>
            </TaskBox>
          </TasksContainer>           
            
        )
    }


export default ToDoList