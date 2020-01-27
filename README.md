# mofron-event-focus
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

focus event for mofron

## event function parameter

- component: event target component object

- boolean: focus status

- mixed: user specified parameter


# Install
```
npm install mofron mofron-event-focus
```

# Sample
```html
<require>
    <tag load="mofron-comp-button">Button</tag>
    <tag load="mofron-event-focus">Focus</tag>
</require>

<script name=fevt run=init>
console.log(fevt1.text().toString() + "focus:" + fevt2);
</script>

<Button>button 1</Button>
<Button event=Focus:@fevt>button 2</Button>
<Button>button 3</Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | status | boolean | focus status |

