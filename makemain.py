from mako.template import Template

titles = ['Home','Projects','Bio','Contact','Schedule','Useful Stuff']
files = ['index','projects','bio','contact','schedule','useful']

navtemplate = Template(filename="navlist.html")

maintemplate = Template(filename="template.html")

for thispage,thisfile in zip(titles,files):
	print("working on " + thispage)
	navlist = ""

	for filename,title in zip(files,titles):
		activecss = ""
		if title == thispage:
			activecss = 'class="active"'

		navlist += navtemplate.render(active=activecss, filename=filename, title=title)

	maincontent = open(thisfile + '.src')
	content = maincontent.read()

	output = maintemplate.render(navlist=navlist, content=content)

	outfile = open(thisfile + '.html','w')
	outfile.write(output)
	outfile.close()
	print("wrote " + thispage)