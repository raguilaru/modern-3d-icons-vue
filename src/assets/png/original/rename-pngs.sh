#!/bin/bash

# Function to convert filename to URI-friendly format
convert_to_uri_friendly() {
    # Convert to lowercase
    # Replace spaces with hyphens
    # Remove special characters except hyphens and dots
    # Remove multiple consecutive hyphens
    echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9.-]//g' | sed 's/--*/-/g'
}

# Process each PNG file
for file in *.png; do
    if [ -f "$file" ]; then
        # Get the new filename
        new_name=$(convert_to_uri_friendly "$file")
        
        # Only rename if the new name is different
        if [ "$file" != "$new_name" ]; then
            echo "Renaming: $file -> $new_name"
            mv "$file" "$new_name"
        fi
    fi
done 