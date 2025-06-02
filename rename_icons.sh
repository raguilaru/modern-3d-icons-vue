#!/bin/bash

# Function to convert filename to URI-friendly format
convert_to_uri_friendly() {
    local filename="$1"
    # Convert to lowercase
    filename=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    # Replace spaces with hyphens
    filename=$(echo "$filename" | tr ' ' '-')
    # Remove special characters except hyphens and dots
    filename=$(echo "$filename" | sed 's/[^a-z0-9.-]//g')
    # Remove multiple consecutive hyphens
    filename=$(echo "$filename" | sed 's/--*/-/g')
    # Remove leading and trailing hyphens
    filename=$(echo "$filename" | sed 's/^-//;s/-$//')
    echo "$filename"
}

# Process each directory
for dir in "src/png/256" "src/png/128" "src/png/64"; do
    echo "Processing directory: $dir"
    cd "$dir" || exit
    
    # Process each PNG file
    for file in *.png; do
        if [ -f "$file" ]; then
            new_name=$(convert_to_uri_friendly "$file")
            if [ "$file" != "$new_name" ]; then
                echo "Renaming: $file -> $new_name"
                mv "$file" "$new_name"
            fi
        fi
    done
    
    cd - > /dev/null || exit
done

echo "Renaming complete!" 