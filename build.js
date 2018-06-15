mkdir("build");
mkdir("build/classes");

javac("src", "build/classes");
copy("res", "build/classes");

jar("circuit.jar", "build/classes", ".*", "manifest.mf");
