OUTDIR = output
OUTDIR_PATH = src/${OUTDIR}
MKDIR_P = mkdir -p

all: generate_data node_modules dev

generate_data:
	make clean
	${MKDIR_P} ${OUTDIR_PATH}
	output="${OUTDIR_PATH}" node node/index.js 

node_modules: package.json
	yarn install

dev: 
	yarn start

clean:
	rm -r ${OUTDIR_PATH};


.PHONY: rm
.PHONY: mkdir
.PHONY: clean
