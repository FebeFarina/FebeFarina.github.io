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
with open("questions.json", "w") as json_file:
    json_file.write(json_object)