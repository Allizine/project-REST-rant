<h1 align="center">Welcome to my Rest-Rant Repo! 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
</p>

<h2>Purpose</h2>
REST-Rant is an app where users can review restaurants. 

<h2 align="center">Routing Table</h2>
<table>
<thead>
<tr>
<th>Method</th>
<th>Path</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/</td>
<td>Home Page</td>
</tr>
<tr>
<td>GET</td>
<td>/places</td>
<td>places index page</td>
</tr>
<tr>
<td>POST</td>
<td>/places</td>
<td>create new places</td>
</tr>
<tr>
<td>GET</td>
<td>/places/new</td>
<td>form page for creating a new place</td>
</tr>
<tr>
<td>GET</td>
<td>/places/:id</td>
<td>Details about a particular place</td>
</tr>
<tr>
<td>PUT</td>
<td>/places/:id</td>
<td>Update a particular place</td>
</tr>
<tr>
<td>GET</td>
<td>/places/:id/edit</td>
<td>Form page for editing an existing place</td>
</tr>
<tr>
<td>DELETE</td>
<td>/places/:id</td>
<td>Delete a particular place</td>
</tr>
<tr>
<td>POST</td>
<td>/places/:id/rant</td>
<td>create a rant (comment) about a particular place</td>
</tr>
<tr>
<td>DELETE</td>
<td>/places/:id/rantId</td>
<td>Delete a rant (comment) about a particular place</td>
</tr>
<tr>
<td>GET</td>
<td>*</td>
<td>404 page (matches any route not defined)</td>
</tr>
</tbody>
</table>

<h2 align="center">Database</h2>
<table align="center">
<tbody>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
</tr>
</thead>
<tr>
<td>_id</td>
<td>Object id</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
</tr>
<tr>
<td>city</td>
<td>String</td>
</tr>
<tr>
<td>state</td>
<td>String</td>
</tr>
<tr>
<td>cuisine</td>
<td>String</td>
</tr>
<tr>
<td>pic</td>
<td>String</td>
</tr>
</tbody>
</table>

### 🏠 [Homepage](https://github.com/Soullessly/project-REST-rant)

## Author

👤 **Alexander Barthel**

* Github: [@Soullessly](https://github.com/Soullessly)

## Show your support

Give a ⭐️ if this project taught you something!

***
