cd %1
for f in *.jpeg; do mv "$f" "$(echo "$f" | sed s/-min//)"; done
cd ..