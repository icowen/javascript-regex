import React, { Component } from 'react';
import './RegexSyntaxTable.css';

class RegexSyntaxTable extends Component {
    render() {
        return <div className={'regex-syntax-table'}>
            <h1>Regex Syntax</h1>
            <table>
                <colgroup>
                    <col className={'symbol'}/>
                    <col className={'description'}/>
                    <col className={'symbol'}/>
                    <col className={'description'}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Meaning</th>
                        <th>Symbol</th>
                        <th>Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>^</code></td>
                        <td>Matches beginning of input</td>
                        <td><code>$</code></td>
                        <td>Matches end of input</td>
                    </tr>
                    <tr>
                        <td><code>\w</code></td>
                        <td>Any number (0-9), or letter (capital or lower case)</td>
                        <td><code>\d</code></td>
                        <td>Any number (0-9)</td>
                    </tr>
                    <tr>
                        <td><code>\D</code></td>
                        <td>Matches a non-digit character</td>
                        <td><code>\n</code></td>
                        <td>Matches a newline</td>
                    </tr>
                    <tr>
                        <td><code>\s</code></td>
                        <td>Matches a white space character</td>
                        <td><code>\S</code></td>
                        <td>Matches a character other than white space</td>
                    </tr>
                    <tr>
                        <td><code>\t</code></td>
                        <td>Matches a tab</td>
                        <td><code>\W</code></td>
                        <td>Matches any non-word character</td>
                    </tr>
                    <tr>
                        <td><code>[\b]</code></td>
                        <td>Matches a backspace</td>
                        <td><code>\b</code></td>
                        <td>Word boundary- Matches position between word characters</td>
                    </tr>
                    <tr>
                        <td><code>\B</code></td>
                        <td>Matches non-word boundary</td>
                        <td><code>\cX</code></td>
                        <td>Matches ctrl + X, where X is between A-Z</td>
                    </tr>
                    <tr>
                        <td><code>[xyz]</code></td>
                        <td>Character set- Matches any one of the characters in the brackets</td>
                        <td><code>[^xyz]</code></td>
                        <td>Negated character set- Matches anything that is not in the brackets</td>
                    </tr>
                    <tr>
                        <td><code>*</code></td>
                        <td>Matches previous character zero or more times</td>
                        <td><code><sup>+</sup></code></td>
                        <td>Matches previous character one or more times</td>
                    </tr>
                    <tr>
                        <td><code>?</code></td>
                        <td>
                            <li>Matches the previous expression zero or one times</li>
                            <li>Also makes previous quatifier non-greedy</li>
                            <li>Also used in lookahead assertions</li>
                        </td>
                        <td><code>.</code></td>
                        <td>Matches any character except the newline</td>
                    </tr>
                    <tr>
                        <td><code>x | y</code></td>
                        <td>Matches x or y</td>
                        <td><code>&#x7b;n&#x7d;</code></td>
                        <td>Matches exactly n occurrences of the preceding expression</td>
                    </tr>
                    <tr>
                        <td><code>&#x7b;n&#44;&#x7d;</code></td>
                        <td>Matches at least n occurrences of preceding expression</td>
                        <td><code>&#x7b;n&#44; m&#x7d;</code></td>
                        <td>Matches at least n and at most m occurrences of preceding expression</td>
                    </tr>
                    <tr>
                        <td><code>(x)</code></td>
                        <td>
                            <li>Matches x and remembers the match</li>
                            <li>Accessed by <code>\1,... \n</code></li>
                        </td>
                        <td><code>(?:x)</code></td>
                        <td>Matches x but does not remember the match</td>
                    </tr>
                    <tr>
                        <td><code>x(?=y)</code></td>
                        <td>Matches x only if x is followed by y</td>
                        <td><code>x(?!y)</code></td>
                        <td>Matches x only if it is not followed by y</td>
                    </tr>
                    <tr>
                        <td><code>(?&#60;=y)x</code></td>
                        <td>Lookbehind- Matches x only if x is preceded by y</td>
                        <td><code>(?&#60;!y)x</code></td>
                        <td>Negated Lookbehind- Matches x only if x is not preceded by y</td>
                    </tr>
                    <tr>
                        <td><code>\<i>n</i></code></td>
                        <td>
                            <li><i>n</i> is a positive integer</li>
                            <li>Back reference to last substring matching the <i>n<sup>th</sup></i> parenthetical</li>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h1>Basic Regex Examples</h1>
        </div>;

    }
}

export default RegexSyntaxTable;