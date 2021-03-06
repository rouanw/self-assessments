# coaching

## Usage

### Get and run the app
```
git clone https://github.com/rouanw/self-assessments.git
cd self-assessments
npm install
grunt serve
```

### Link to your data

Each individual keeps their own self-assessments on their GitHub page in a repo called `my-capability-radar` in a file called `my-radar.json`. Example:

https://github.com/rouanw/my-capability-radar/blob/master/my-radar.json

When you load up the app, you specify another JSON file containing an array with the usernames of all the people you want to look at and click go. Users in the user list can be GitHub usernames (in which case it will use convention to find their files) or direct URLs. Example user list:

http://raw.githubusercontent.com/rouanw/self-assessments/master/app/users.json

## Development

### Build & development

Run `grunt` for building and `grunt serve` for preview.

### Testing

Running `grunt test` will run the unit tests with karma.
