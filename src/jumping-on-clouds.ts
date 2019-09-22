enum Cloud {
    Safe = 0,
    Unsafe = 1
}

enum Jump {
    Short = 1,
    Long = 2
}

export default function jumpingOnClouds(ar: Cloud[]) {
    const steps = <number[]>[];
    let cloudIndex = 0;
    while (cloudIndex < ar.length) {
        if (ar[cloudIndex + Jump.Long] === Cloud.Safe) {
            steps.push(cloudIndex += Jump.Long);
        } else {
            steps.push(cloudIndex += Jump.Short);
        }
    }
    return steps.length - 1;
}
