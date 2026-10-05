ORIGIN := https://github.com/DevCopy/face-exora.git

.PHONY: push

push:
	npm run build
	git init
	git add -A
	@git diff --cached --quiet || git commit -m "Update face-exora"
	git branch -M main
	@git remote get-url origin >/dev/null 2>&1 || git remote add origin $(ORIGIN)
	git push -u origin main
