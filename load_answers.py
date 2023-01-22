import re
import json

def markdown_to_json(markdown_file):
    with open(markdown_file, 'r') as f:
        markdown_text = f.read()
    #Splitting the markdown_text by the `###` 
    questions_answers = markdown_text.split("###")
    #Removing the first empty element
    questions_answers.pop(0)
    #Creating the final list
    question_answers = []
    for q_a in questions_answers:
        question = q_a.split("\n")[0]
        #get the answer and remove the leading spaces
        answer = q_a.split("\n",1)[-1].lstrip() 
        question_answers.append({"question":question, "answer":answer})
    # Convert the list to a json object
    json_object = json.dumps(question_answers)
    
    return json_object

json_object = markdown_to_json('Temas/Tema1.md')
with open("questions1.json", "w") as json_file:
    json_file.write(json_object)
json_object = markdown_to_json('Temas/Tema2.md')
with open("questions2.json", "w") as json_file:
    json_file.write(json_object)   
json_object = markdown_to_json('Temas/Tema3.md')
with open("questions3.json", "w") as json_file:
    json_file.write(json_object) 
json_object = markdown_to_json('Temas/Tema4.md')
with open("questions4.json", "w") as json_file:
    json_file.write(json_object)
json_object = markdown_to_json('Temas/Tema5.md')
with open("questions5.json", "w") as json_file:
    json_file.write(json_object)    