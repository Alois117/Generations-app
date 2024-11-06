def calculateGrades(score):
    if score>=90:
        return 'A'
    elif score>=60:
        return 'B'
    elif score>=50:
        return 'C'
    elif score>=40:
        return 'D'
    else:
        return 'F'
score =74
grade=calculateGrades(score)
print(f"The Grade for {score} is {grade}.")