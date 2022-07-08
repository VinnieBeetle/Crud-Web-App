/*
Vincent Ho
index.html
7/8/22
functions
*/

//getting tasks of the table body
//this version of a function is only defined when the line is reached
// 'function setUpflower(){}' is a declaration and is defined and ran asap
var app = new function(){
	//grabbing the table body and assigning it to the element
	this.el = document.getElementById('tasks')
	//array to then put it into
	this.tasks =[]
	
	//display all the to-do (the read)
	this.FetchAll = function(){
		var data = '';
		
		if(this.tasks.length>0){
			for(i=0; i<this.tasks.length;i++){
				data+='<tr>';
				data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
				
				data+='<td><button onclick="app.Edit('+i+')" class ="btn btn-warning">Edit</button></td>';
				
				data+='<td><button onclick = "app.Delete('+i+')" class = "btn btn-danger">Delete</button></td>';
				
				data+='</tr>'
				
			}
		}
		this.Count(this.tasks.length);
		return this.el.innerHTML = data;
		
	};
	
	//create
	this.Add = function(){
		el = document.getElementById('add-todo');
		var task = el.value;
		if(task){
			this.tasks.push(task.trim());
			el.value='';
			this.FetchAll();
		}
	};
	
	//update
	this.Edit = function(item){
		el = document.getElementById('edit-todo');
		el.value = this.tasks[item]
		document.getElementById('edit-box').style.display = 'block';
		self = this;
		
		document.getElementById('save-edit').onsubmit = function(){
			var task = el.value;
			if(task){
				self.tasks.splice(item, 1, task).trim();
				self.FetchAll();
				CloseInput();
			}
		}
		
	};
	
	//delete
	this.Delete = function(item){
		this.tasks.splice(item, 1);
		this.FetchAll();
	};
	
	this.Count = function(data){
		var el = document.getElementById('counter');
		var name = 'Tasks';
		if(data){
			if(data == 1){
				name = 'Task';
			}
			el.innerHTML = data+' '+ name;
		}
		else{
			el.innerHTML = 'No '+name;
		}
	};
	
}

app.FetchAll();

function CloseInput(){
	document.getElementById('edit-box').style.display = 'none';
}


