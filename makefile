all:
	@java -jar build/compiler.jar --language_in ECMASCRIPT6_STRICT --compilation_level SIMPLE_OPTIMIZATIONS --js src/array.vector.js --js_output_file dist/array.vector.min.js
	@echo base `cat src/array.vector.js | wc -m` bytes
	@echo gz `gzip --stdout src/array.vector.js | wc -m` bytes
	@echo min `cat dist/array.vector.min.js | wc -m` bytes
	@echo min+gz `gzip --stdout dist/array.vector.min.js | wc -m` bytes
	@node test/test.js