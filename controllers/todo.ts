import {  Note } from "../config/interfaces/interfaces";
import Todo from "../models/Todo";

export default class CTodo {
  private static instance: CTodo;

  private constructor() {}

  public static getInstance(): CTodo {
    if (CTodo.instance) {
      return CTodo.instance;
    }
    CTodo.instance = new CTodo();
    return CTodo.instance;
  }
  
  private notes: Note[] = [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Project deadlines and milestones discussed.",
    },
    {
      id: 2,
      title: "Grocery List",
      content: "Eggs, milk, bread, and vegetables needed.",
    },
    { id: 3, 
      title: "Work To-Dos",
      content: "Complete user authentication and test APIs.",
    },
    { id: 4,
      title: "Travel Plan",
      content: "Book flight and hotel for Paris trip.",
    },
    {   id: 5,
      title: "Recipe: Pancakes",
      content: "Mix ingredients and cook on a pan.",
    },
    { id: 6,
      title: "Important Reminder",
      content: "Pay bills and send client newsletter.",
    }
  ];
  

   getAllTodoData(
  ): Note[]{
    try {
      console.log("Todo data: ", this.notes);
      return this.notes;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
 

  async addTodo( todoData: Note) {
    try {
      todoData.id=this.notes.length+1;
      this.notes.push(todoData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}
