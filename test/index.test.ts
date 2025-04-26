import { generateToc } from '../src/index';

describe('generateToc', () => {
  it('should generate correct TOC for a basic Markdown input', () => {
    const markdown = `
# Introduction

## Getting Started  
### Requirements  
### Quick Start  

## Installation  
### Using npm  
### Using Docker  

## Usage  
### Basic Example  
### Advanced Configuration  

## API Reference  
### Authentication  
### Endpoints  
### Error Codes  

## Examples  

## Troubleshooting  

## FAQ  

## License
`;

    const expectedToc = `
## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   2.1 [Requirements](#requirements)
   2.2 [Quick Start](#quick-start)
3. [Installation](#installation)
   3.1 [Using npm](#using-npm)
   3.2 [Using Docker](#using-docker)
4. [Usage](#usage)
   4.1 [Basic Example](#basic-example)
   4.2 [Advanced Configuration](#advanced-configuration)
5. [API Reference](#api-reference)
   5.1 [Authentication](#authentication)
   5.2 [Endpoints](#endpoints)
   5.3 [Error Codes](#error-codes)
6. [Examples](#examples)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)
9. [License](#license)
`.trim();

    const result = generateToc(markdown);
    expect(result).toBe(expectedToc);
  });

  // Other tests can be added here...
});
