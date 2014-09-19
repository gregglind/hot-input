Hot Input:  Faster Filtering of Input Alerts
==============================================

Filtering through input alterts, to decide which are 'real' or not is fussy and slow.  AI is the wrong solution, because there a too many 'black swans', making training sets ineffective.

Seeing all the data about an event in one place would make it fast for an expert to judge.

Traits to show:
- word
- date
- Fx 'version' (?)
- relevant input comments, 'best first'  [1]
- trend (% up / down)
- # of comments


## Design Solution

A 'big board' of events.  Hovering over each gives 'additional notes'.  Clicking on them 'destroys' the event [2].


## Building

See issue #1.  Right now, 'src/thirdparty' is untracked.  I tend to favor 'bower -> webpack' solutions to dependencies.  For now, get your own copies of the deps!


[1] Bestness is a matter of debate, and should reflect:  Reproducible, before and after, clear description, etc.

[2] Future versions should have a 'yes' / 'no' that appears on hover, that phones home with the judgement.




