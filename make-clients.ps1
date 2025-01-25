# Measure time for the first command
Write-Host "Running 'openapi-generator-cli generate'..."
$time1 = Measure-Command {
    openapi-generator-cli generate -i project-api.yaml -g typescript-angular -o src/client-openapi
}

# Measure time for the second command
Write-Host "Running 'npx @hey-api/openapi-ts'..."
$time2 = Measure-Command {
    npx @hey-api/openapi-ts
}

# Output results
Write-Host ""
Write-Host "Execution Times:"
Write-Host "openapi-generator-cli generate: $($time1.TotalSeconds) seconds"
Write-Host "npx @hey-api/openapi-ts: $($time2.TotalSeconds) seconds"

# Compare times
if ($time1.TotalSeconds -lt $time2.TotalSeconds) {
    Write-Host "Result: 'openapi-generator-cli generate' was faster by $($time2.TotalSeconds - $time1.TotalSeconds) seconds."
} elseif ($time1.TotalSeconds -gt $time2.TotalSeconds) {
    Write-Host "Result: 'npx @hey-api/openapi-ts' was faster by $($time1.TotalSeconds - $time2.TotalSeconds) seconds."
} else {
    Write-Host "Result: Both commands took the same time."
}
