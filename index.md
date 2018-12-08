---
title: Projects
---
<div class="projects">
	{% for project in site.projects %}
		<a href="{{project.link}}" class="project">
			<h2>{{project.title}}</h2>
			{{project.content | markdownify}}
		</a>
	{% endfor %}
</div>