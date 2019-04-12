f=open("File.csv",'r') # reading comma seprated values file
p=open("Generated.txt",'w')
f.readline() #avoiding headings
identity = f.readline().strip('\n')
while identity:
	split_identity = identity.split(",")

	#details
	code = split_identity[0]
	name = split_identity[1]
	roll = split_identity[2]
	email = split_identity[3]
	event = split_identity[4]
	
	#DONT FORGET to change foldername FOLDER with event name before adding participant value
	a="{ value: '"+name+" | "+roll+" | "+email+" | "+event+"', data: '<a href=\"https://s3.ap-south-1.amazonaws.com/e-con19/%23"+str(code[1:])+".jpg\" target=\"_blank\" download=\"https://s3.ap-south-1.amazonaws.com/e-con19/%23"+str(code[1:])+".jpg\">Download</a>'},\n"
	
	p.write(a)
	identity = f.readline().strip('\n')
	
f.close()
p.close()