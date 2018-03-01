
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Bootstrap Example</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="dropzone.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="dropzone.js"></script>
<style>
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
	margin-bottom: 0;
	border-radius: 0;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {
	height: 450px
}

/* Set gray background color and 100% height */
.sidenav {
	padding-top: 20px;
	background-color: #f1f1f1;
	height: 100%;
}

/* Set black background color, white text and some padding */
footer {
	background-color: #555;
	color: white;
	padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
	.sidenav {
		height: auto;
		padding: 15px;
	}
	.row.content {
		height: auto;
	}
}
</style>
</head>
<body>

	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#myNavbar">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Logo</a>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#"><span class="glyphicon glyphicon-log-in"></span>
							Login</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container-fluid text-center">
		<div class="row content">
			<div class="col-sm-2 sidenav">
				<div class="btn-group-vertical">
					<button type="button" class="btn btn-primary" id="qurey1">fetch
						database</button>
					<br>
					<button type="button" class="btn btn-primary" id="qurey2">xml
						string</button>
					<br>
					<button type="button" class="btn btn-primary" id="qurey3">xml
						document</button>
					<br>

					<button type="button" class="btn btn-primary" id="qurey4">base64
						data</button>
					<br>
					<button type="button" class="btn btn-primary" id="qurey5">upload
						data</button>
					<br>
					<button type="button" class="btn btn-primary" id="qurey6">
						<a href="http://localhost:8005/xmlparser/rest/test/check"
							style="color: white">Query6</a>
					</button>
					<br>
				</div>
			</div>
			<div class="col-sm-6 text-left" style="height: 500px; overflow: auto">
				<h1>Welcome</h1>
				<hr>
				<table class="table table-hover">
					<thead>
						<tr>
							<th>First name</th>
							<th>Last name</th>
							<th>Salary</th>
						</tr>
					</thead>
					<tbody id="test">

					</tbody>
				</table>

			</div>
			<div class="col-sm-4" style="overflow: auto">
				<textarea rows="20" cols="50" id="base64">

</textarea>
			</div>
			<div class="row">
				<div class="col-sm-6" style="border: 2px solid black">
					<div class="dropzone" id="dropzone3"
						style="min-height: 150px; cursor: pointer; border: 2px dashed #0087F7; background: #eee; border-radius: 40px; background: white;">
						<span class="glyphicon glyphicon-download"> </span>

						<div class="fallback">
							<input name="file" type="file" name="myfiles" multiple />
						</div>
					</div>
					<br />
					<hr>
					<button type="button" class="btn btn-primary" id="upload">Upload
						Your Resume</button>
					<br>


					<div class="dropzone" id="dropzone1"
						style="min-height: 150px; margin: 0; padding: 0; cursor: pointer; position: relative; border: 2px dashed #0087F7; background: #eee; border-radius: 40px; background: white;">
						<span class="glyphicon glyphicon-download"> </span>
						<div id="dropzonePreview1"
							style="min-height: 150px; margin: 0; padding: 0;"></div>

					</div>
				</div>
				<div class="col-sm-6" style="border: 2px solid black">
					<h1>Registration Module</h1>
					<form class="form-horizontal" method="post"
						enctype='multipart/formData' name="form1">
						<div class="row">
							<div class="form-group">
								<label class="control-label col-sm-2" for="email">Email:</label>
								<div class="col-sm-10">
									<input type="email" class="form-control" id="email"
										placeholder="Enter email" name="email">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">

								<label class="control-label col-sm-2" for="pwd">Password:</label>
								<div class="col-sm-10">
									<input type="password" class="form-control" id="pwd"
										placeholder="Enter password" name="pwd">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<label class="control-label col-sm-2" for="pwd">Confirm
									Password:</label>
								<div class="col-sm-10">
									<input type="password" class="form-control" id="cpwds"
										placeholder="Enter password" name="cpwds">
								</div>
							</div>
						</div>
						<br />
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<input type="submit" class="btn btn-primary" name="mysql"
									value="Save To MySQL"
									formaction="http://localhost:8005/xmlparser/rest/test/insert1">
								<input type="button" class="btn btn-primary" name="sqlExpress"
									id="sqlExpressdb" value="Save To SQLexpress"
								>
							</div>
						</div>
					</form>
				</div>
				<div class="col-sm-6" style="border: 2px solid black">
					<h1>Login module</h1>
					<form class="form-horizontal" method="post"
						enctype="multipart/formData" name="form2">
						<div class="row">
							<div class="form-group">
								<label class="control-label col-sm-2" for="email">Email:</label>
								<div class="col-sm-10">
									<input type="email" class="form-control" id="emails"
										placeholder="Enter email" name="emails">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">

								<label class="control-label col-sm-2" for="pwd">Password:</label>
								<div class="col-sm-10">
									<input type="password" class="form-control" id="pwds"
										placeholder="Enter password" name="pwds">
								</div>
							</div>
						</div>
						<br />
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<input type="button" class="btn btn-primary" name="sqlExpressdb"id="sqllogin"
									value="LogIN with SQLexpress">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<footer class="container-fluid text-center">
		<p>Footer Text</p>
	</footer>
	<script>
		$("#qurey1")
				.click(
						function() {
							$
									.ajax({
										type : "GET",

										url : "http://localhost:8005/xmlparser/rest/test/test3",
										dataType : "xml",
										success : function(xmlData) {
											$("employee", xmlData)
													.each(
															function() {
																var name = $(
																		this)
																		.find(
																				"name")
																		.text(), title = $(
																		this)
																		.find(
																				"email")
																		.text(), salary = $(
																		this)
																		.find(
																				"password")
																		.text();
																var output = '<tr class="no-kids"><td class="name">'
																		+ name
																		+ '</td><td class="kids">'
																		+ title
																		+ '</td><td class="cars">'
																		+ salary
																		+ '</td></tr>';
																$("tbody")
																		.append(
																				output);
															});
										}
									});
						})
		$("#qurey2")
				.click(
						function() {
							$
									.ajax({
										type : "GET",

										url : "http://localhost:8005/xmlparser/rest/test/test2",
										dataType : "xml",
										success : function(xmlData) {
											$("employee", xmlData)
													.each(
															function() {
																var name = $(
																		this)
																		.find(
																				"name")
																		.text(), title = $(
																		this)
																		.find(
																				"title")
																		.text(), salary = $(
																		this)
																		.find(
																				"salary")
																		.text();
																var output = '<tr class="no-kids"><td class="name">'
																		+ name
																		+ '</td><td class="kids">'
																		+ title
																		+ '</td><td class="cars">'
																		+ salary
																		+ '</td></tr>';
																$("tbody")
																		.append(
																				output);
															});
										}
									});
						});
		$("#qurey3").click(function() {
			$.ajax({
				type : "GET",

				url : "http://localhost:8005/xmlparser/rest/test/test3",
				dataType : "xml",
				success : function(xmlData) {
					console.log(xmlData);
				}
			});
		});
		$("#qurey4").click(function() {
			$.ajax({
				type : "GET",

				url : "http://localhost:8005/xmlparser/rest/test/test4",
				dataType : "html",
				success : function(base64data) {
					console.log(base64data);
					$('#base64').html(base64data);
				}
			});
		});
		$("#sqlExpressdb")
				.click(
						function() {
							var email = $('#email').val();
							var pass = $('#pwd').val();
							$
									.ajax({
										type : "POST",
										url : "http://localhost:8005/xmlparser/rest/test/jubilant/emp_details_login",
										data : {
											email : email,
											pwd : pass,
										},
										success : function(data) {
											console.log(data);
										}
									});
						});
		$("#sqllogin")
		.click(
				function() {
					var email = $('#emails').val();
					var pass = $('#pwds').val();
					$
							.ajax({
								type : "POST",
								url : "http://localhost:8005/xmlparser/rest/test/jubilant/emp_details_registration",
								data : {
									email : email,
									pwd : pass,
								},
								success : function(data) {
									console.log(data);
								}
							});
				});
		var myDropzoneOptions = {
			url : "http://localhost:8005/xmlparser/rest/test/upload",
			acceptedFiles : ".doc,.pdf,.json,.jpg",
			maxFiles : "1",
			clickable : "#upload",
			previewsContainer : '#dropzonePreview1',
			uploadMultiple : false,
			dictDefaultMessage : "Upload your resume here",
			addRemoveLinks : true,

		};

		var myDropzone = new Dropzone("#dropzonePreview1", myDropzoneOptions);
		var myDropzoneOptions2 = {
			url : "http://localhost:8005/xmlparser/rest/test/upload",
			acceptedFiles : ".doc,.pdf,.json,.jpg",
			maxFiles : "1",
			clickable : "#dropzonePreview1",
			previewsContainer : '#dropzonePreview1',
			uploadMultiple : false,
			dictDefaultMessage : "Upload your resume here",
			addRemoveLinks : true,

		};
		var myDropzone = new Dropzone("#dropzone1", myDropzoneOptions2);
		var myDropzoneOptions1 = {
			url : "http://localhost:8005/xmlparser/rest/test/upload",
			acceptedFiles : ".doc,.pdf,.json,.jpg",
			maxFiles : "1",
			clickable : true,
			uploadMultiple : false,
			dictDefaultMessage : "Upload your resume here",
			addRemoveLinks : true,

		};
		var myDropzone1 = new Dropzone("#dropzone3", myDropzoneOptions1);
	</script>
</body>
</html>