import React, {useEffect, useState} from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Button} from 'react-native';
import { styles } from './css/css';


import {SupabaseClient} from "@supabase/supabase-js"
import {supabase} from "../../services/supabase"


export default function Tela1() {
  const [newTask, setNewTask] = useState("");

  const[tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const {data, error} = await supabase.from("tasks").select("*");

    if(error){
      console.error(error);
    }else{
      setTasks(data);
    }
  };

  const handleAddTask = async (task:string) => {
    const{error} = await supabase
    .from("tasks")
    .insert({task, completed:false});
  

    if(error){
      console.error(error);
    }else {
      await fetchTasks();}
  };

  const deleteTask = async (id:number)=>{
    const{error} = await supabase.from("tasks").delete().match({id});

    if(error){
      console.error(error);
    }else{
      await fetchTasks();
    }
  }

  const updateTask = async(id:number, completed: boolean)=>{
    const{error} = await supabase.from("tasks").update({completed}).match({id})

    if (error){
      console.error(error);
    }else{
      await fetchTasks();
    }
  }





  useEffect(()=>{
    fetchTasks();
  },[]);




  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Text style={styles.titleAgendamento}>Criar Escala</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Nome" 
          placeholderTextColor="#808080"
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
          />
          <TouchableOpacity style={styles.button} onPress={()=> handleAddTask(newTask)}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
          <ScrollView>
            {tasks.map((task)=> (
                <View style={styles.task} key={task.id}>
                  <Text style={[styles.textTask, task.completed && styles.completed]}>{task.task}</Text>
                  <Button title="Concluir" onPress={() => updateTask(task.id, !task.completed)}/>
                  <Button title="Excluir" onPress={() => deleteTask(task.id)}/>
                </View>
              ))}
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}
