module("Extra credit");

test("Constructor invocation", 1, function() {
	ok(new $$("body") instanceof tQuery, "Returns an instance of tQuery when called with 'new'");
});

test("Function invocation", 1, function() {
	ok($$("body") instanceof tQuery, "Returns an instance of tQuery when called without 'new'");
});
