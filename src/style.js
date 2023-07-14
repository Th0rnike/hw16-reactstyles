import styled from "styled-components" 

export const TasksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const TaskBox = styled.div`
    width: 400px;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const FormStyle = styled.form`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
`

export const TitleStyle = styled.h3`
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: underline;
    text-underline-offset: 12px;
    text-decoration-color: ${props => {
        if (props.text === "Backlog") return "red";
        if (props.text === "In Progress") return "yellow";
        if (props.text === "Done") return "lightgreen";
        return "blue"; // Default color if no match
    }};

`

export const InputForm = styled.input`
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;   
    margin-top: 10px
`

export const ButtonStyle = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px
`

export const UlStyle = styled.ul`
    list-style: none;
    padding: 0;
`

export const LiStyle = styled.li`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-width: 2px 2px 2px 5px;
    border-style: solid;
    border-color: ${props => props.done ? getRandomColor() : getRandomColor()};
`

export const RemoveButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #bf3a3a;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #6c3030;
    }
`

export const ReturnButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #bfb23a;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #666c30;
    }
`

export const ProgressButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff; /* Blue color */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #00008b; /* Dark blue color */
    }
`;

export const DoneButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    background-color: #218838;
    }
`;


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  