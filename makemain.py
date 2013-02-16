from mako.template import Template
import codecs

titles = ['Home','Projects','Papers','Bio','Contact','Schedule','Useful Stuff']
files = ['index','projects','papers','bio','contact','schedule','useful']

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

	maincontent = codecs.open(thisfile + '.src','r','utf-8')
	content = maincontent.read()

	output = maintemplate.render(navlist=navlist, content=content)

	outfile = codecs.open(thisfile + '.html','w','utf-8')
	outfile.write(output)
	outfile.close()
	print("wrote " + thispage)